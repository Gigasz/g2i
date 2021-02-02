import React, { useEffect } from 'react'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import {
    View,
    StyleSheet
} from 'react-native'
import {
    ScreenContainer,
    Text
} from "../components/common"
import {
    fetchQuestions
} from '../store/actions/quizActions'
import {
    ApplicationState
} from '../store'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

const InitialScreen: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchQuestions())
    }, [])

    const {
        loading_fetch_questions,
        error_fetch_questions,
    } = useSelector((state: ApplicationState) => state.quizReducer)

    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Text>
                    Welcome to the Trivia Challenge!
                </Text>
                <Text>
                    You will be presented with 10 True or False questions.
                </Text>
                <Text>
                    Can you score 100%?
                </Text>
                <Text>
                    BEGIN
                </Text>
            </View>
        </ScreenContainer>
    )
}

export default InitialScreen;
