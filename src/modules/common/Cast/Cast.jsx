import { API } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Photo, Name, Character, CastItem } from './CastStyle';
import NoProfilePhoto from 'img/NoProfilePhoto.jpg';
import { BASE_IMG_URL } from 'constants/baseImgUrl';

export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState('');
  const shortedCast = cast.slice(0, 20);

  useEffect(() => {
    API.fetchMovieCastById(id).then(r => setCast(r.data.cast));
  }, [id]);

  if (!cast) {
    return null;
  }

  return (
    <ul>
      {shortedCast.map(({ character, name, profile_path, cast_id }) => {
        const hasActorPhoto = profile_path
          ? BASE_IMG_URL + profile_path
          : NoProfilePhoto;

				return (
          <CastItem key={cast_id}>
            <Photo src={hasActorPhoto} alt="" width={70} />
            <Name>{name}</Name>
            <Character>character: {character}</Character>
          </CastItem>
        );
      })}
    </ul>
  );
}
