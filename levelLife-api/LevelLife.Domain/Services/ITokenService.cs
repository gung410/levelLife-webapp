using LevelLife.Domain.Entities;

namespace LevelLife.Application.Services
{
    public interface ITokenService
    {
        string GenerateJWTToken(User user);
    }
}