using Microsoft.EntityFrameworkCore;
using TripTracker.Data.Contexts;
using TripTracker.Data.Models;

namespace TripTracker.Data.Repositories
{

    public class TripRepository : ITripRepository
    {
        private TripsContext _tripsContext;
        public TripRepository(TripsContext tripsContext)
        {
            _tripsContext = tripsContext;
        }
        public async Task AddTripAsync(Trip trip)
        {
            await _tripsContext.AddAsync(trip);
        }

        public Task DeleteTripAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Trip?> GetTripAsync(int id)
        {
            return await _tripsContext.Trips.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<Trip>> GetTripsAsync()
        {
            return await _tripsContext.Trips.ToListAsync();
        }

        public Task UpdateTripAsync(int tripId, Trip trip)
        {
            throw new NotImplementedException();
        }

    }
}
