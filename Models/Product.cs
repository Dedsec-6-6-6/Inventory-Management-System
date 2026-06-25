using System.ComponentModel.DataAnnotations;

namespace InventoryAPI.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public string Category { get; set; } = string.Empty;

        public decimal Price { get; set; }

        public int Quantity { get; set; }

        public int ReorderLevel { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}