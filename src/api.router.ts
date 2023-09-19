import { Controller, Get, Req, Res, Use } from 'decorators-express';
import { NextFunction, Request, Response } from 'express';

@Controller("/api")
@Use(TokenValidationMiddleware)
export class ApiController {

    @Get("/user")
    getUser(@Req() req: Request, @Res() res: Response) {
        res.send({
            username: "SOME USER",
        })
    }
}

async function validateOrRefreshToken(req: Request): Promise<boolean> {
    return Promise.resolve(true);
}

export function TokenValidationMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log("Entering TokenValidationMiddleware");
    validateOrRefreshToken(req).then((s) => {
        if (!s) {
            res.status(403);
            res.send({error: 403});
        } else {
            next();
        }
    })
}