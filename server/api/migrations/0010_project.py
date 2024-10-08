# Generated by Django 5.0.7 on 2024-10-05 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_video'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('github', models.CharField(max_length=100)),
                ('website', models.CharField(max_length=100)),
                ('discription', models.CharField(max_length=100)),
                ('short_discription', models.CharField(max_length=100)),
                ('picture', models.ImageField(upload_to='images')),
            ],
        ),
    ]
