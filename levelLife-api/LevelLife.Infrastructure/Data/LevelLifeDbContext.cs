using LevelLife.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace LevelLife.Infrastructure.Data
{
    public class LevelLifeDbContext : DbContext
    {
        public LevelLifeDbContext(DbContextOptions<LevelLifeDbContext> options) : base(options)  
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { }

        public DbSet<User> Users { get; set; }
    }
}