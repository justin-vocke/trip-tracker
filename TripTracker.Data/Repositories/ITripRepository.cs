using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TripTracker.Data.Models;

namespace TripTracker.Data.Repositories
{
    public interface ITripRepository
    {
        Task<List<Trip>> GetTripsAsync();

        Task<Trip?> GetTripAsync(int id);

        Task UpdateTripAsync(int tripId, Trip trip);

        Task DeleteTripAsync(int id);

        Task AddTripAsync(Trip trip);


    }
}
