using Microsoft.EntityFrameworkCore;
using TripTracker.Business.Services;
using TripTracker.Data.Contexts;
using TripTracker.Data.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("EnableCORS", builder =>
    {
        builder.WithOrigins().AllowAnyMethod().AllowAnyHeader().SetIsOriginAllowed(origin => true) // allow any origin
       .AllowCredentials().Build();
    });
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ITripService, TripService>();
builder.Services.AddScoped<ITripRepository, TripRepository>();
builder.Services.AddDbContext<TripsContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("EnableCORS");
app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
