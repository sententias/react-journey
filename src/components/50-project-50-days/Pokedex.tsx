import React, { useEffect, useState } from 'react';
import PokedexWrapper from './css/PokedexWrapper.ts';
import axios, { AxiosResponse } from 'axios';

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
};

interface PokemonType {
  imageURL: string;
  id: number;
  name: string;
  type: string;
}

interface CSSProperties {
  [key: `--${string}`]: string | number;
}

const POKEMON_NUMBER = 201;

export const Pokedex = () => {
  const [pokemon, setPokemon] = useState<PokemonType[]>([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        // 获取宝可梦总数
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        // 限制请求的宝可梦数量
        const count = Math.min(POKEMON_NUMBER, response.data.count); 

        for (let id = 1; id <= count; id++) {
          // 获取每只宝可梦的数据
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response: AxiosResponse<any>) => {
              const pokemonData = {
                imageURL: response.data.sprites.front_default,
                id: response.data.id,
                name: response.data.name,
                type: response.data.types[0].type.name
              };

              // 更新状态，将新获取的宝可梦数据添加到现有数据中
              setPokemon((prevPokemon) => [...prevPokemon, pokemonData]);
            })
            .catch((error) => {
              console.log(`获取宝可梦 ${id} 数据失败`, error);
            });
        }
      } catch (error) {
        console.log('获取宝可梦总数失败', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <PokedexWrapper>
      <h2>宝可梦图鉴</h2>
      <div className='pokemon-box'>
        {pokemon.map((item) => (
          <div
            className='pokemon'
            key={item.id}
            style={{ backgroundColor: colors[item.type] }}
          >
            <div
              className='image'
              // 目前有个问题是如果图片没加载完成，那么一个元素都不会渲染，后期想办法改正，暂且先使用本地图片代替
              // style={{ '--bgc': `url(${item.imageURL})` } as CSSProperties}
              style={{ '--bgc': `url('assets/images/logo.png')` } as CSSProperties}
            ></div>
            <div className='id'>#{item.id}</div>
            <div className='name'>{item.name}</div>
            <div className='type'>{item.type}</div>
          </div>
        ))}
      </div>
    </PokedexWrapper>
  );
};

export default Pokedex;
