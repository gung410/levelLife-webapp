using System;
using System.Threading.Tasks;
using LevelLife.Domain.Entities;
using LevelLife.Domain.Repositories;
using LevelLife.Domain.Services;

namespace LevelLife.Application.Services
{
    public class UserService
    {
        private readonly IPasswordHasherService _passwordHasher;
        private readonly IUserRepository _userRepository;
        private readonly ITokenService _tokenService;

        public UserService(IUserRepository userRepository, IPasswordHasherService passwordHasher, ITokenService tokenService)
        {
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
            _tokenService = tokenService;
        }

        public async Task<User> RegisterUserAsync(RegisterRequestDTO request)
        {
            var existingUser = await _userRepository.GetByUsernameAsync(request.UserName);
            if (existingUser != null)
            {
                throw new Exception("User with this username already exists.");
            }

            var hashedPassword = _passwordHasher.HashPassword(request.Password);
            var user = new User { Username = request.UserName, PasswordHash = hashedPassword };

            await _userRepository.AddAsync(user);
            return user;
        }

        public async Task<string> AuthenticateUserAsync(LoginRequestDTO request)
        {
            var user = await _userRepository.GetByUsernameAsync(request.UserName);
            if (user == null || !_passwordHasher.VerifyPassword(user.PasswordHash, request.Password))
            {
                throw new Exception("Invalid username or password.");
            }

            return _tokenService.GenerateJWTToken(user);
        }
    }
}
