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
            await _tripsContext.SaveChangesAsync();
        }


        public async Task<Trip?> GetTripAsync(int id)
        {
            return await _tripsContext.Trips.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<Trip>> GetTripsAsync()
        {
            return await _tripsContext.Trips.ToListAsync();
        }

        public async Task UpdateTripAsync(int tripId, Trip trip)
        {
            var currentTrip = await _tripsContext.Trips.FirstOrDefaultAsync(x => x.Id == tripId);
            if (currentTrip != null)
            {
                currentTrip.Name = trip.Name;
                currentTrip.Description = trip.Description;
                currentTrip.DateStarted = trip.DateStarted;
                currentTrip.DateCompleted = trip.DateCompleted;
            }

            await _tripsContext.SaveChangesAsync();
        }

        public async Task DeleteTripAsync(int tripId)
        {
            var currentTrip = await _tripsContext.Trips.FirstOrDefaultAsync(x => x.Id == tripId);
            if(currentTrip != null)
            {
                _tripsContext.Remove(currentTrip);
            }
            await _tripsContext.SaveChangesAsync();
        }

    }
}
