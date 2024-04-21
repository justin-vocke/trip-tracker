using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TripTracker.Data.Models;
using TripTracker.Data.Repositories;

namespace TripTracker.Business.Services
{
    public class TripService: ITripService
    {
        private readonly ITripRepository _tripRepository;
        public TripService(ITripRepository tripRepository) 
        {
            _tripRepository = tripRepository;
        }

        public async Task AddTripAsync(Trip trip)
        {
             await _tripRepository.AddTripAsync(trip);
        }

        public async Task<Trip?> GetTripAsync(int id)
        {
            return await _tripRepository.GetTripAsync(id);
        }

        public async Task<List<Trip>> GetTripsAsync()
        {
            return await _tripRepository.GetTripsAsync();
        }

        public async Task UpdateTripAsync(int tripId, Trip trip)
        {
            await _tripRepository.UpdateTripAsync(tripId, trip);
        }
    }
}
