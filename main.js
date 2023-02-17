function permutator(inputArr) {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(inputArr);
  return result;
}

function getDistance(building, start, end) {
  var distance = building.filter((ele) => ele.name == start);
  return distance[0].distance[`${end}`];
}

function delivery_route_optimization(buildings, start) {
  const size = building.length;
  var names = [];
  building.forEach((ele) => {
    if (ele.name != start) names.push(ele.name);
  });
  var routes = permutator(names);
  routes.forEach((ele) => {
    ele.push(start);
  });

  var distances = [];
  for (let i = 0; i < routes.length; i++) {
    var sum = 0;
    for (let j = -1; j < size - 1; j++) {
      if (j == -1) {
        sum = sum + getDistance(building, start, routes[i][j + 1]);
      } else {
        sum = sum + getDistance(building, routes[i][j], routes[i][j + 1]);
      }
    }
    distances.push(sum);
  }
  var smallDistanceIndex = 0;

  for (let i = 1; i < distances.length; i++) {
    console.log(distances[smallDistanceIndex], " : ", distances[i]);
    if (distances[smallDistanceIndex] > distances[i]) {
      smallDistanceIndex = i;
    }
  }
  console.log("smalles route : ", start, ",", routes[smallDistanceIndex]);
}

const building = [
  {
    name: "A",
    distance: {
      A: 0,
      B: 10,
      C: 15,
      D: 20,
    },
  },
  {
    name: "B",
    distance: {
      A: 10,
      B: 0,
      C: 35,
      D: 25,
    },
  },
  {
    name: "C",
    distance: {
      A: 15,
      B: 35,
      C: 0,
      D: 30,
    },
  },
  {
    name: "D",
    distance: {
      A: 20,
      B: 25,
      C: 30,
      D: 0,
    },
  },
];

delivery_route_optimization(building, "A");
