using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using LevelLife.Domain.Entities;
using LevelLife.Domain.Repositories;
using LevelLife.Infrastructure.Data;

namespace LevelLife.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly LevelLifeDbContext _dbContext;

        public UserRepository(LevelLifeDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<User> GetByUsernameAsync(string username)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(user => user.Username == username);
        }

        public async Task<User> GetByIdAsync(int id)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(user => user.Id == id);
        }

        public async Task<IList<User>> GetAllAsync()
        {
            return await _dbContext.Users.ToListAsync();
        }

        public async Task AddAsync(User user)
        {
            await _dbContext.Users.AddAsync(user);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateAsync(User user)
        {
            _dbContext.Users.Update(user);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(user => user.Id == id);
            if (user != null)
            {
                _dbContext.Users.Remove(user);
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}