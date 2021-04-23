"""
Django settings for sportaj_core project.

Generated by 'django-admin startproject' using Django 3.1.2.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""

from pathlib import Path
import environ
import os

import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

root = environ.Path(__file__) - 2

# Fetch env vars
os.environ.setdefault("ENV_FILE", root(".env"))
env = environ.Env(DEBUG=(bool, False))
if os.path.isfile(os.environ["ENV_FILE"]):
    env.read_env(os.environ["ENV_FILE"])

SECRET_KEY = env("SECRET_KEY", default="NOT_NEEDED_FOR_DOCKER_BUILDS")
ALLOWED_HOSTS = env("ALLOWED_HOSTS", default=[])

# Error Tracking

sentry_sdk.init(
    dsn=env("SENTRY_DSN", default=None),
    integrations=[DjangoIntegration()],

    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production,
    traces_sample_rate=1.0,

    # If you wish to associate users to errors (assuming you are using
    # django.contrib.auth) you may enable sending PII data.
    send_default_pii=True,

    # By default the SDK will try to use the SENTRY_RELEASE
    # environment variable, or infer a git commit
    # SHA as release, however you may want to set
    # something more human-readable.
    # release="myapp@1.0.0",
)

# Application definition

INSTALLED_APPS = [
    "sportaj_app",
    "pwa",
    "taggit",
    "taggit_labels",
    "colorfield",
    "faicon",
    "analytical",
    "mathfilters",
    "location_field.apps.DefaultConfig",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "static_precompiler",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.cache.UpdateCacheMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.cache.FetchFromCacheMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "sportaj_core.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "sportaj_core.wsgi.application"

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    "default": env.db() if env("DATABASE_URL", default=None) else {}
}

CACHES = {
    "default": {
        "BACKEND": "redis_cache.RedisCache",
        "LOCATION": env("REDIS_URL", default="127.0.0.1:6379"),
    }
}

#############
#           #
#   DEBUG   #
#           #
#############

DEBUG = env("DEBUG", default=True)

# Debug Toolbar
if DEBUG:
	MIDDLEWARE = ["debug_toolbar.middleware.DebugToolbarMiddleware"] + MIDDLEWARE
	INSTALLED_APPS += [
		"debug_toolbar"
	]

INTERNAL_IPS = [
	"127.0.0.1",
] + env.list("DEBUG_IPS", default=[])


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True

MEDIA_URL = '/media/'
MEDIA_ROOT = root(env("MEDIA_DIR", default="../static"))

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = "/static/"
STATIC_ROOT = root(env("STATIC_DIR", default="../static"))

STATICFILES_FINDERS = [
    "django.contrib.staticfiles.finders.FileSystemFinder",
    "django.contrib.staticfiles.finders.AppDirectoriesFinder",
    # other finders..
    "static_precompiler.finders.StaticPrecompilerFinder",
]

STATIC_PRECOMPILER_COMPILERS = (
    (
        "static_precompiler.compilers.libsass.SCSS",
        {
            "sourcemap_enabled": False,
            "load_paths": ["/path"],
            "precision": 8,
        },
    ),
    (
        "static_precompiler.compilers.libsass.SASS",
        {
            "sourcemap_enabled": False,
            "load_paths": ["/path"],
            "precision": 8,
            "output_style": "compressed",
        },
    ),
)

LOCATION_FIELD = {
    'map.provider': 'google',
    'search.provider': 'google',

    "provider.google.api": "//maps.google.com/maps/api/js?sensor=false",
    "provider.google.api_key": env("GOOGLE_MAPS_API_KEY", default=None),
    "provider.google.api_libraries": "",
    "provider.google.map.type": "ROADMAP",
}

GOOGLE_ANALYTICS_GTAG_PROPERTY_ID = env("GOOGLE_ANALYTICS_GTAG_PROPERTY_ID", default=None)

GOOGLE_CAL_API_KEY = env("GOOGLE_CAL_API_KEY", default=None)
GOOGLE_SEARCH_MAPS_API_KEY = env("GOOGLE_SEARCH_MAPS_API_KEY", default=None)
GOOGLE_GEO_API_KEY = env("GOOGLE_GEO_API_KEY", default=None)

PWA_APP_DEBUG_MODE = DEBUG

PWA_APP_NAME = "Sportaj Ga"
PWA_APP_DISPLAY = "standalone"
PWA_APP_SCOPE = "/"
PWA_APP_ORIENTATION = "any"
PWA_APP_START_URL = "/"
PWA_APP_LANG = "sl-SI"