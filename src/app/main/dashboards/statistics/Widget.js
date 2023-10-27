import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {memo} from 'react';

function Widget({title, count, color, url, urlText}) {
    return (
        <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-8 pt-12">
            </div>
            <div className="text-center mt-8">
                <Typography className={"text-7xl sm:text-8xl font-bold tracking-tight leading-none text-" + color + "-500"}>
                    {count}
                </Typography>
                <Typography className={"text-lg font-medium text-" + color + "-600"}>{title}</Typography>
            </div>
            <Typography
                className="flex items-baseline justify-center w-full mt-20 mb-24"
                color="text.secondary"
            >
                <span className="truncate"><a href={url}>{urlText}</a></span>
            </Typography>
        </Paper>
    );
}

export default memo(Widget);
