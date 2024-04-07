using Microsoft.AspNetCore.Mvc;
using TripTracker.Business.Services;
using TripTracker.Data.Models;

namespace TripTracker.Server.Controllers
{
    public class TripController
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
                var trips = await _tripService.GetTripsAsync();
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
        }
    }
}
