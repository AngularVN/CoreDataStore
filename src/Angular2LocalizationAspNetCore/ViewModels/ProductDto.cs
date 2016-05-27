﻿namespace Angular2LocalizationAspNetCore.ViewModels
{
    public class ProductDto
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ImagePath { get; set; }

        public double PriceEUR { get; set; }

        public double PriceCHF { get; set; }
    }
}
