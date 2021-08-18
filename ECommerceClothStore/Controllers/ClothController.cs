using Clothdotnetcorewebapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Clothdotnetcorewebapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClothController : ControllerBase
    {
        private readonly ClothDbContext context;
        public ClothController(ClothDbContext context)
        {
            this.context = context;
        }
        // GET: api/<ClothController>
        [HttpGet]
        public IEnumerable<Cloth> Get()
        {
            return context.Cloths.ToList();
        }
        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public Cloth Get(int id)
        {
            return context.Cloths.Find(id);
        }
        [HttpPost]
        public void Post([FromBody] Cloth cloth)
        {

            context.Cloths.Add(cloth);
            context.SaveChanges();
        }
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Cloth cloth)
        {
            if (id == cloth.CID)

                context.Cloths.Update(cloth);

            context.SaveChanges();

        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Cloth data = context.Cloths.Find(id);
            context.Cloths.Remove(data);
            context.SaveChanges();

        }

    }
}
