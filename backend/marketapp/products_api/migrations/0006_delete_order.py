# Generated by Django 5.0.3 on 2024-05-11 11:30

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("products_api", "0005_order_address_order_amount"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Order",
        ),
    ]