using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using LevelLife.Domain.Entities;

namespace LevelLife.Domain.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetByIdAsync(int id);
        Task<IList<User>> GetAllAsync();
        Task<User> GetByUsernameAsync(string username);
        Task AddAsync(User user);
        Task UpdateAsync(User user);
        Task DeleteAsync(int id);
    }
}