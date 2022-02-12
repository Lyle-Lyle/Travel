import React from "react";
import { useNavigate, useParams } from "react-router-dom";

interface MatchParams {
  touristRouteId: string;
}


export const DetailPage: React.FC<any> = (
  
) => {
//   console.log(props.history);
//   console.log(props.location);
//   console.log(props.match);
  const navigate = useNavigate();
  const { id } = useParams()
  navigate('/detail' + '/' + id);
  return <h1>路游路线详情页面, 路线ID: {id}</h1>;
};
