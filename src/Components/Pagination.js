import React from 'react';
import axios from 'axios'

const Pagination = (url, planets, resolve, reject) => {
  axios.get(url)
    .then(response => {
      const retrivedPlanets = planets.concat(response.data.results)
      if (response.data.next !== null) {
        getPlanets(response.data.next, retrivedPlanets, resolve, reject)
      } else {
        resolve(retrivedPlanets)
      }
    })
    .catch(error => {
      console.log(error)
      reject('Something wrong. Please refresh the page and try again.')
    })

    const nextPage = (url, planets, resolve, reject) => {
      axios.get(url)
        .then(response => {
          const retrivedPlanets = planets.concat(response.data.results)
          if (response.data.next !== null) {
            getPlanets(response.data.next, retrivedPlanets, resolve, reject)
          } else {
            resolve(retrivedPlanets)
          }
        })
        .catch(error => {
          console.log(error)
          reject('Something wrong. Please refresh the page and try again.')
        })

    return (
        <div>
            
        </div>
    );
};

export default Pagination;