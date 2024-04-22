using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TripTracker.Data.Models;


namespace TripTracker.Business.Services
{
    public interface ITripService
    {
        Task<Trip?> GetTripAsync(int id);
        Task<List<Trip>> GetTripsAsync();
        Task AddTripAsync(Trip trip);
        Task UpdateTripAsync(int tripId, Trip trip);
        Task DeleteTripAsync(int tripId);
        
    }
}
