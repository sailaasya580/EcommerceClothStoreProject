using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Clothdotnetcorewebapi.Models
{
    public class Cloth
    {
        [Key]
        public int CID { get; set; }
        public string CImage { get; set; }
        public string CName { get; set; }
        public int CPrice { get; set; }
        public string CSize { get; set; }
    }
}