# Generated by Django 2.1.5 on 2019-01-08 03:37

import core.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_recipe_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=core.models.recipe_image_file_path),
        ),
    ]
