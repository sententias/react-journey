import React, { useState } from 'react'
import MovieAppWrapper from './css/MovieAppWrapper.ts'

interface MovieType {
  title: string
  url: string
  introduce: string
}

export const MovieApp = () => {
  const movieData: MovieType[] = [
    {
      title: 'Inception',
      url: 'https://www.example.com/inception',
      introduce:
        'A thief who enters the dreams of others to steal secrets from their subconscious is given a chance to have his criminal history erased as payment for implanting an idea into the mind of a CEO.'
    },
    {
      title: 'The Matrix',
      url: 'https://www.example.com/the-matrix',
      introduce:
        'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
    },
    {
      title: 'Interstellar',
      url: 'https://www.example.com/interstellar',
      introduce:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      title: 'The Shawshank Redemption',
      url: 'https://www.example.com/shawshank-redemption',
      introduce:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
      title: 'The Dark Knight',
      url: 'https://www.example.com/dark-knight',
      introduce:
        'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, forcing Batman to abandon his tradition of silence.'
    },
    {
      title: 'Forrest Gump',
      url: 'https://www.example.com/forrest-gump',
      introduce:
        'The presidencies of Kennedy and Johnson, the events of Vietnam, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.'
    },
    {
      title: 'The Godfather',
      url: 'https://www.example.com/godfather',
      introduce:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
    },
    {
      title: 'Pulp Fiction',
      url: 'https://www.example.com/pulp-fiction',
      introduce:
        'The lives of two mob hitmen, a boxer, a gangster’s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
    },
    {
      title: 'Fight Club',
      url: 'https://www.example.com/fight-club',
      introduce:
        'An insomniac office worker and a soap salesman build a global organization to help vent male aggression.'
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      url: 'https://www.example.com/return-of-the-king',
      introduce:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
    },
    {
      title: 'The Silence of the Lambs',
      url: 'https://www.example.com/silence-of-the-lambs',
      introduce:
        'A young FBI cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.'
    },
    {
      title: 'Gladiator',
      url: 'https://www.example.com/gladiator',
      introduce:
        'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.'
    },
    {
      title: 'Braveheart',
      url: 'https://www.example.com/braveheart',
      introduce:
        'When his beloved wife is murdered by the cruel English ruler, William Wallace begins a revolt against the tyrannical English king that turns into a full-scale war.'
    },
    {
      title: 'Jurassic Park',
      url: 'https://www.example.com/jurassic-park',
      introduce:
        'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.'
    },
    {
      title: 'Avatar',
      url: 'https://www.example.com/avatar',
      introduce:
        'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
    }
  ]

  const [movieArray, setMovieArray] = useState<MovieType[]>(movieData)
  const [actvieIndex,setActiveIndex] = useState<number>(-1)

  const showInterduce = (index: number) => (
    setActiveIndex(index)
  )

  return (
    <MovieAppWrapper>
      {movieArray.map((item,index) => (
        <div
          className='movie-container'
          key={item.title}
          onMouseEnter={() => showInterduce(index)}
        >
          {item.title}
          {index === actvieIndex ? <div className='interduce-container'>{item.introduce}</div> : ''}
        </div>
      ))}
    </MovieAppWrapper>
  )
}

export default MovieApp
