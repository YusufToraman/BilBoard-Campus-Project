# Generated by Django 4.2.6 on 2023-11-24 21:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0008_message_chat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chat',
            name='messages',
            field=models.ManyToManyField(blank=True, to='mainapp.message'),
        ),
        migrations.AlterField(
            model_name='chat',
            name='participiants',
            field=models.ManyToManyField(related_name='chats', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='message',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
