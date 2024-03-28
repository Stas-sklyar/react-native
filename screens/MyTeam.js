import React, {useCallback, useState} from 'react';
import {
    StyleSheet,
    RefreshControl,
    ScrollView,
} from 'react-native';
import CreateColleagueForm from "../UI/MyTeam/CreateColleagueForm";
import ColleaguesList from "../UI/MyTeam/ColleaguesList";
import {useQuery} from "react-query";
import {fetchColleagues} from "../services/Colleague";

const MyTeamScreen = () => {
    const {
        data: colleagues,
        error: errorFetchingColleagues,
        isLoading: colleaguesIsLoading,
        refetch: refetchColleagues
    } = useQuery('fetchColleagues', fetchColleagues);

    const onRefresh = useCallback(async () => {
        await refetchColleagues()
    }, []);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={colleaguesIsLoading} onRefresh={onRefresh}/>
            }
        >
            <CreateColleagueForm />
            <ColleaguesList
                colleagues={colleagues}
                errorFetchingColleagues={errorFetchingColleagues}
                colleaguesIsLoading={colleaguesIsLoading}
            />
        </ScrollView>
    );
};

export default MyTeamScreen;
