import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../../config";
import { environment } from '../../webapp/src/environments/environment';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  let token = <string>req.cookies['SESSIONID'];

  //to remove this for production build
   //form dev bypass the verification
  if(!environment.production && !token) {
    token = jwt.sign({userId: 7, username: 'admin@andorra.com'}, config.jwtSecrete, {
      expiresIn: "2h"
    });
  }

  let jwtPayload;
  
  try {
    jwtPayload = jwt.verify(token, config.jwtSecrete);
    res.locals.jwtPayload = jwtPayload;
  } catch(e) {
    res.status(401).send();
    return;
  }

  const {userId, username} = jwtPayload;
  const newToken = jwt.sign({userId, username}, config.jwtSecrete, {
    expiresIn: "2h"
  });

  res.cookie('SESSIONID', newToken, {httpOnly: true, secure: true});

  next();
}