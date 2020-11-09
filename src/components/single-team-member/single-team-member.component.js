import React from 'react';
import {
  NameAndPictureContainer,
  ProfileImage,
  ProfileImageContainer,
  SingleTeamMemberContainer,
  AvatarAnimLight,
} from './single-team-member.styles';

function SingleTeamMember({ name, picture }) {
  return (
    <SingleTeamMemberContainer>
      <NameAndPictureContainer>
        <ProfileImageContainer>
          <AvatarAnimLight>
            <ProfileImage alt={name} src={picture} />
          </AvatarAnimLight>
        </ProfileImageContainer>
      </NameAndPictureContainer>
    </SingleTeamMemberContainer>
  );
}

export default React.memo(SingleTeamMember);
