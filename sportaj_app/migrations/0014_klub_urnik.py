# Generated by Django 2.2.17 on 2021-01-28 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sportaj_app', '0013_auto_20210127_2206'),
    ]

    operations = [
        migrations.AddField(
            model_name='klub',
            name='urnik',
            field=models.CharField(blank=True, max_length=512, null=True),
        ),
    ]