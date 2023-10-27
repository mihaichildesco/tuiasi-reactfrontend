import FusePageSimple from '@fuse/core/FusePageSimple';
import {styled, useTheme} from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion';
import React, {useEffect, useState} from 'react';
import useThemeMediaQuery from '../../../../@fuse/hooks/useThemeMediaQuery';
import {useTranslation} from 'react-i18next';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Button from '@mui/material/Button';
import axios from "axios";
import {useSelector} from "react-redux";
import {selectUser} from "app/store/userSlice";
import moment from 'moment';
import {Link} from 'react-router-dom';

const Root = styled(FusePageSimple)(({theme}) => ({
    '& .FusePageSimple-header': {
        backgroundColor: theme.palette.background.paper,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.palette.divider,
        '& > .container': {
            maxWidth: '100%',
        },
    },
}));

function ProfileViewPage() {

    const theme = useTheme();
    const {t} = useTranslation('ProfilePage');
    const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

    const container = {
        show: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const user = useSelector(selectUser);
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/profile/about').then((res) => {
            setData(res.data);
        });
    }, []);

    if (!data) {
        return null;
    }

    const {general, work, contact, groups, friends} = data;

    const item = {
        hidden: {opacity: 0, y: 40},
        show: {opacity: 1, y: 0},
    };

    return (
        <Root
            header={
                <div className="flex flex-col">
                    <img
                        className="h-160 lg:h-320 object-cover w-full"
                        src="assets/images/pages/profile/cover.jpg"
                        alt="Profile Cover"
                    />

                    <div className="flex flex-col flex-0 lg:flex-row items-center max-w-5xl w-full mx-auto px-32 lg:h-72">
                        <div className="-mt-96 lg:-mt-88 rounded-full">
                            <motion.div initial={{scale: 0}} animate={{scale: 1, transition: {delay: 0.1}}}>
                                <Avatar
                                    sx={{borderColor: 'background.paper'}}
                                    className="w-128 h-128 border-4"
                                    src="assets/images/avatars/male-04.jpg"
                                    alt="User avatar"
                                />
                            </motion.div>
                        </div>

                        <div className="flex flex-col items-center lg:items-start mt-16 lg:mt-0 lg:ml-32">
                            <Typography className="text-lg font-bold leading-none">
                                {user.data.displayName}
                            </Typography>
                            <Typography color="text.secondary">
                                {user.data.email}
                            </Typography>
                        </div>

                        <div className="flex flex-1 justify-end my-16 lg:my-0">
                            <Button
                                component={Link}
                                to="/profile/edit"
                                color="secondary"
                                variant="text"
                            >
                                {t("EDIT_PROFILE")}
                            </Button>
                        </div>
                    </div>
                </div>
            }
            content={
                <div className="flex flex-auto justify-center w-full max-w-5xl mx-auto p-24 sm:p-32">

                    <motion.div variants={container} initial="hidden" animate="show" className="w-full">
                        <div className="md:flex">
                            <div className="flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32">
                                <Card component={motion.div} variants={item} className="w-full mb-32">
                                    <div className="px-32 pt-24">
                                        <Typography className="text-2xl font-semibold leading-tight">
                                            {t('GENERAL_INFO')}
                                        </Typography>
                                    </div>

                                    <CardContent className="px-32 py-24">
                                        <div className="mb-24">
                                            <Typography className="font-semibold mb-4 text-15">
                                                {t("NAME")}
                                            </Typography>
                                            <Typography>
                                                {data?.name ? data.name : "-"}
                                            < /Typography>
                                        </div>

                                        <div className="mb-24">
                                            <Typography className="font-semibold mb-4 text-15">
                                                {t("TITLE")}
                                            </Typography>
                                            <Typography>
                                                {data?.title ? data.title : "-"}
                                            < /Typography>
                                        </div>

                                        <div className="mb-24">
                                            <Typography className="font-semibold mb-4 text-15">
                                                {t("ACTIVITY_FIELD")}
                                            </Typography>
                                            <Typography>
                                                {data?.activityField ? data.activityField : "-"}
                                            </Typography>
                                        </div>

                                        <div className="mb-24">
                                            <Typography className="font-semibold mb-4 text-15">
                                                {t("ABOUT")}
                                            </Typography>
                                            <Typography>
                                                {data?.about ? data.about : "-"}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card component={motion.div} variants={item} className="w-full mb-32">
                                    <div className="px-32 pt-24">
                                        <Typography className="text-2xl font-semibold leading-tight">
                                            Contact
                                        </Typography>
                                    </div>

                                    <CardContent className="px-32 py-24">

                                        <div className="mb-24">
                                            <Typography className="font-semibold mb-4 text-15">
                                                {t("CONTACT_EMAIL")}
                                            </Typography>
                                            <Typography>
                                                {data?.contactEmail ? data.contactEmail : "-"}
                                            </Typography>
                                        </div>

                                        <div className="mb-24">
                                            <Typography className="font-semibold mb-4 text-15">
                                                Facebook
                                            </Typography>
                                            <Typography>
                                                {data?.facebook ?
                                                    <a href={data.facebook} target="_blank">{data.facebook}</a>
                                                    : "-"}
                                            </Typography>
                                        </div>

                                        <div className="mb-24">
                                            <Typography className="font-semibold mb-4 text-15">
                                                LinkedIn
                                            </Typography>
                                            <Typography>
                                                {data?.linkedin ?
                                                    <a href={data.linkedin} target="_blank">{data.linkedin}</a>
                                                    : "-"}
                                            </Typography>
                                        </div>

                                        <div className="mb-24">
                                            <Typography className="font-semibold mb-4 text-15">
                                                Instagram
                                            </Typography>
                                            <Typography>
                                                {data?.instagram ?
                                                    <a href={data.instagram} target="_blank">{data.instagram}</a>
                                                    : "-"}
                                            </Typography>
                                        </div>

                                    </CardContent>
                                </Card>

                                <Card component={motion.div} variants={item} className="w-full mb-32">
                                    <div className="px-32 pt-24">
                                        <Typography className="text-2xl font-semibold leading-tight">
                                            {t("DOCUMENTS")}
                                        </Typography>
                                    </div>

                                    <CardContent className="px-32 py-24">

                                        <div className="mb-24">
                                            <Typography className="font-semibold mb-4 text-15">
                                                {t("PROFESSIONAL_DOCUMENTS")}
                                            </Typography>
                                            {data.documents.map((document) => (
                                                <div className="flex items-center" key={document.name}>
                                                    <FuseSvgIcon className="mx-4" size={16} color="action">
                                                        material-outline:insert_drive_file
                                                    </FuseSvgIcon>
                                                    <Typography>{document.name} - {moment(document.updateDate).fromNow()}</Typography>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>
                        </div>
                    </motion.div>
                </div>
            }
            scroll={isMobile ? 'normal' : 'page'}
        />
    );
}

export default ProfileViewPage;
