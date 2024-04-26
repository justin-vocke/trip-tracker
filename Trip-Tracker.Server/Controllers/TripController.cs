using Microsoft.AspNetCore.Mvc;
using TripTracker.Business.Services;
using TripTracker.Data.Models;

namespace TripTracker.Server.Controllers
{
    
        [Route("api/[controller]")]
        [ApiController]
        public class TripsController : ControllerBase
        {
            private ITripService _tripService;
            public TripsController(ITripService tripService)
            {
                _tripService = tripService;
            }

            [HttpGet("GetTrips")]
            public async Task<IActionResult> GetTrips()
            {
            try
            {
                var trips = await _tripService.GetTripsAsync();
                return Ok(trips);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
                
            }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetTrip(int id)
        {
            var trips = await _tripService.GetTripAsync(id);
            return Ok(trips);
        }

        [HttpPost("AddTrip")]
            public async Task<IActionResult> AddTrip([FromBody] Trip trip)
            {
                if (trip is null) return BadRequest("Invalid request. Please try again.");

                else
                {
                    await _tripService.AddTripAsync(trip);
                    return Ok();
                }
            }

        [HttpPut("UpdateTrip/{id}")]
        public async Task<IActionResult> UpdateTrip(int id, Trip trip)
        {
            await _tripService.UpdateTripAsync(id, trip);
            return Ok();
        }

        [HttpDelete("DeleteTrip/{id}")]
        public async Task<IActionResult> DeleteTrip(int id)
        {
            await _tripService.DeleteTripAsync(id);
            return Ok();
        }
    }

    

}
