using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TripTracker.Data.Models;

namespace TripTracker.Data.Contexts
{
    public class TripsContext : DbContext
    {
        public TripsContext(DbContextOptions<TripsContext> options) : base(options)
        {

        }

        public DbSet<Trip> Trips { get; set; }
    }
}
