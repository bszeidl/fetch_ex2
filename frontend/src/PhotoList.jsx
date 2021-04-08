import React from 'react';
import {useFetch} from './hooks';

const PhotoList = () => {

		const [data, loading] = useFetch(
			"https://jsonplaceholder.typicode.com/photos?albumId=1"
		);
	return (
		<div>

			{loading ? (
					"Loading"
				) : (
					<ul>
						{
							data.map(
								({id, title, url}) =>
									(
									<li>
										key={`photo-${id}`}
										<img src={url} alt={title}/>
									</li>
									)								
							)
						}
					</ul>
				)
			}

		</div>
	)
};

export default PhotoList;

