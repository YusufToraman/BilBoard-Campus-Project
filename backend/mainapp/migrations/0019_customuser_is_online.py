# Generated by Django 4.2.6 on 2023-12-15 23:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0018_alter_product_product_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='is_online',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
