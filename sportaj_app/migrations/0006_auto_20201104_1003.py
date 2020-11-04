# Generated by Django 3.1.3 on 2020-11-04 09:03

import django.contrib.postgres.fields
from django.db import migrations, models
import sportaj_app.models


class Migration(migrations.Migration):

    dependencies = [
        ('sportaj_app', '0005_auto_20201104_0739'),
    ]

    operations = [
        migrations.AlterField(
            model_name='klub',
            name='header_images',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.URLField(default=None, verbose_name='Header Image'), default=sportaj_app.models.get_header_images_default, size=None, verbose_name='Header Images'),
        ),
    ]
