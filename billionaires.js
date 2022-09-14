//Total value of top 10: 1344.4B
//Data gathered from https://www.forbes.com/real-time-billionaires/#7886ee5e3d78 on September 13, 2022 (8:40AM).


let averageNet = 748800 //This is the average American net worth based on the Federal Reserve's 2019 Survey of Consumer Finances.

let billionaires = [{
    "name": "Elon Musk",
    "rank": 1,
    "net": 273900000000,
    "percentOfTotal": 0.2037,
    "age": 51,
    "image": "https://static.wixstatic.com/media/8b565e_631750d9e2c24ea4989ed903529892b3~mv2.jpg",
    "country": "United States",
    "source": ["Tesla", "SpaceX"]
  },
  {
    "name": "Bernard Arnault",
    "rank": 2,
    "net": 162200000000,
    "percentOfTotal": 0.1206,
    "age": 73,
    "image": "https://static.wixstatic.com/media/8b565e_cd0f9d433f504be08c6312fbcd1d08be~mv2.jpg",
    "country": "France",
    "source": ["LVMH"]
  },
  {
    "name": "Jeff Bezos",
    "rank": 3,
    "net": 159800000000,
    "percentOfTotal": 0.1189,
    "age": 58,
    "image": "https://static.wixstatic.com/media/8b565e_53edfd268b8941b3a1e6d4f5f07d2308~mv2.jpg",
    "country": "United States",
    "source": ["Amazon"]
  },
  {
    "name": "Gautam Adani",
    "rank": 4,
    "net": 151400000000,
    "percentOfTotal": 0.1126,
    "age": 60,
    "image": "https://static.wixstatic.com/media/8b565e_a94a2444266e46079522b0ade06cbc03~mv2.jpg",
    "country": "India",
    "source": ["Infrastructure", "Commodities"]
  },
  {
    "name": "Bill Gates",
    "rank": 5,
    "net": 109100000000,
    "percentOfTotal": 0.0812,
    "age": 66,
    "image": "https://static.wixstatic.com/media/8b565e_d00c99e8dc2c40fe8b537c94572da715~mv2.jpg",
    "country": "United States",
    "source": ["Microsoft"]
  },
  {
    "name": "Larry Ellison",
    "rank": 6,
    "net": 105700000000,
    "percentOfTotal": 0.0786,
    "age": 78,
    "image": "https://static.wixstatic.com/media/8b565e_bd329d2acd914ddba995e72dc7958019~mv2.jpg",
    "country": "United States",
    "source": ["Software"]
  },
  {
    "name": "Warren Buffett",
    "rank": 7,
    "net": 100100000000,
    "percentOfTotal": 0.0745,
    "age": 92,
    "image": "https://static.wixstatic.com/media/8b565e_8977d5db59124314a5eb0da954fb4b55~mv2.jpg",
    "country": "United States",
    "source": ["Berkshire Hathaway"]
  },
  {
    "name": "Mukesh Ambani",
    "rank": 8,
    "net": 95800000000,
    "percentOfTotal": 0.0713,
    "age": 65,
    "image": "https://static.wixstatic.com/media/8b565e_f97562cd31e547538e7c0340e046f9f6~mv2.jpg",
    "country": "India",
    "source": ["Diversified"]
  },
  {
    "name": "Larry Page",
    "rank": 9,
    "net": 95200000000,
    "percentOfTotal": 0.0708,
    "age": 49,
    "image": "https://static.wixstatic.com/media/8b565e_11efba28b5d442fa803685215e217cf6~mv2.jpg",
    "country": "United States",
    "source": ["Google"]
  },
  {
    "name": "Sergey Brin",
    "rank": 10,
    "net": 91200000000,
    "percentOfTotal": 0.0678,
    "age": 49,
    "image": "https://static.wixstatic.com/media/8b565e_701420195b3d474291444ce9ecb99c2e~mv2.jpg",
    "country": "United States",
    "source": ["Google"]
  }
]

$(".container").append("<img id='elon' class = 'i1' src= 'https://static.wixstatic.com/media/8b565e_631750d9e2c24ea4989ed903529892b3~mv2.jpg'/>");

$(".container").append("<img id='bernard' class = 'i2' src= 'https://static.wixstatic.com/media/8b565e_cd0f9d433f504be08c6312fbcd1d08be~mv2.jpg'/>");

$(".container").append("<img id='jeff' class = 'i3' src= 'https://static.wixstatic.com/media/8b565e_53edfd268b8941b3a1e6d4f5f07d2308~mv2.jpg'/>");

$(".container").append("<img id='gautam' class = 'i4' src= 'https://static.wixstatic.com/media/8b565e_a94a2444266e46079522b0ade06cbc03~mv2.jpg'/>");

$(".container").append("<img id='bill' class = 'i5' src= 'https://static.wixstatic.com/media/8b565e_d00c99e8dc2c40fe8b537c94572da715~mv2.jpg'/>");

$(".container").append("<img id='larry' class = 'i6' src= 'https://static.wixstatic.com/media/8b565e_bd329d2acd914ddba995e72dc7958019~mv2.jpg'/>");

$(".container").append("<img id='warren' class = 'i7' src= 'https://static.wixstatic.com/media/8b565e_8977d5db59124314a5eb0da954fb4b55~mv2.jpg'/>");

$(".container").append("<img id='mukesh' class = 'i8' src= 'https://static.wixstatic.com/media/8b565e_f97562cd31e547538e7c0340e046f9f6~mv2.jpg'/>");

$(".container").append("<img id='page' class = 'i9' src= 'https://static.wixstatic.com/media/8b565e_11efba28b5d442fa803685215e217cf6~mv2.jpg'/>");

$(".container").append("<img id='sergey' class = 'i10' src= 'https://static.wixstatic.com/media/8b565e_701420195b3d474291444ce9ecb99c2e~mv2.jpg'/>");

$(".title").append("<h1 id='title' class = 'header1'>The Billionaire Loader</h1>");

