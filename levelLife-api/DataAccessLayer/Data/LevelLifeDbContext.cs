using LevelLife.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace LevelLife.Api.DataAccessLayer.Data
{
    public class LevelLifeDbContext : DbContext
    {
        // contructor khởi tạo 
        public LevelLifeDbContext(DbContextOptions<LevelLifeDbContext> options) : base(options)  
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { }

        public DbSet<User> Users { get; set; }
    }
}