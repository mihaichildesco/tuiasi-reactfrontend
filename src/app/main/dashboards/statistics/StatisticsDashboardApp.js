import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styled} from '@mui/material/styles';
import reducer from './store';
import {getStatistics, selectStatistic} from './store/statisticsSlice';

import {motion} from 'framer-motion';
import Widget from "./Widget";
import {useTranslation} from "react-i18next";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {selectUser} from "app/store/userSlice";


const Root = styled(FusePageSimple)(({theme}) => ({
    '& .FusePageSimple-header': {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
    },
}));

function StatisticsDashboardApp(props) {

    const {t} = useTranslation('StatisticsDashboardApp');
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const statistics = useSelector(selectStatistic);

    useEffect(() => {
        dispatch(getStatistics());
    }, [dispatch]);
    if (_.isEmpty(statistics)) {
        return null;
    }


    const container = {
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0},
    };

    return (
        <Root
            header={
                <div className="flex flex-col w-full px-24 sm:px-32">
                    <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48">
                        <div className="flex flex-auto items-center min-w-0">
                            <Avatar className="flex-0 w-64 h-64" alt="user photo" src={user?.data?.photoURL}>
                                {user?.data?.displayName[0]}
                            </Avatar>
                            <div className="flex flex-col min-w-0 mx-16">
                                <Typography className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
                                    {t("WELCOME_BACK")}, {user.data.displayName}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            }
            content={
                <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <Typography className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
                            {t("GENERAL")}
                        </Typography>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={item}>
                            <Widget
                                title={t('ARTICLES')}
                                count={statistics?.articles ? statistics.articles : "NaN"}
                                color={"blue"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Widget
                                title={t('EVENTS')}
                                count={statistics?.events ? statistics.events : "NaN"}
                                color={"blue"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Widget
                                title={t('NEWS')}
                                count={statistics?.news ? statistics.news : "NaN"}
                                color={"blue"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Widget
                                title={t('FILES')}
                                count={statistics?.files ? statistics.files : "NaN"}
                                color={"blue"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <Typography className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
                            {t("ORGANIZATION")}
                        </Typography>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={item}>
                            <Widget
                                title={t('CENTERS')}
                                count={statistics?.centers ? statistics.centers : "NaN"}
                                color={"amber"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Widget
                                title={t('PROJECTS')}
                                count={statistics?.projects ? statistics.projects : "NaN"}
                                color={"amber"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Widget
                                title={t('MEMBERS')}
                                count={statistics?.members ? statistics.members : "NaN"}
                                color={"amber"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Widget
                                title={t('TEAMS')}
                                count={statistics?.teams ? statistics.teams : "NaN"}
                                color={"amber"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Widget
                                title={t('PARTNERS')}
                                count={statistics?.partners ? statistics.partners : "NaN"}
                                color={"amber"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <Typography className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
                            {t("CLASSIFICATION")}
                        </Typography>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={item}>
                            <Widget
                                title={t('RESEARCH_FIELDS')}
                                count={statistics?.researchFields ? statistics.researchFields : "NaN"}
                                color={"red"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Widget
                                title={t('TOPICS')}
                                count={statistics?.topics ? statistics.topics : "NaN"}
                                color={"red"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <Widget
                                title={t('TYPES')}
                                count={statistics?.types ? statistics.types : "NaN"}
                                color={"red"}
                                url={"/apps/profile"}
                                urlText={t('VIEW_MORE')}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            }
        />
    );
}

export default withReducer('statisticsDashboardApp', reducer)(StatisticsDashboardApp);
