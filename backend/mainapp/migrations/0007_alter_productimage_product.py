# Generated by Django 4.2.5 on 2023-12-01 22:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0006_rename_product_photo_productimage_product_photos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimage',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_photos', to='mainapp.product'),
        ),
    ]
