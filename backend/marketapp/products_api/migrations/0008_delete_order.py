# Generated by Django 5.0.3 on 2024-05-12 12:57
from django.db import migrations

class Migration(migrations.Migration):
    dependencies = [
        ("products_api", "0007_initial"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Order",
        ),
    ]