import { useParams } from 'react-router-dom';
import { Photo, Name, Character, CastItem } from './CastStyle';
import NoProfilePhoto from 'img/NoProfilePhoto.jpg';
import { BASE_IMG_URL } from 'constants/baseImgUrl';
import { useFetchMovie } from 'hooks';

export default function Cast() {
  const { id } = useParams();
  const { data } = useFetchMovie({
    url: `/movie/${id}/credits`,
  });
  const cast = data?.cast || [];

  return (
    <ul>
      {cast.map(({ character, name, profile_path, cast_id }) => {
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
