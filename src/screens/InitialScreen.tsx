import React, { useEffect } from 'react'
import {
    useDispatch,
    useSelector
} from 'react-redux'
import {
    useNavigation
} from '@react-navigation/native'
import {
    View,
    StyleSheet
} from 'react-native'
import {
    ScreenContainer,
    Text,
    Button
} from "../components/common"
import {
    fetchQuestions
} from '../store/actions/quizActions'
import {
    ApplicationState
} from '../store'
import { Colors } from '../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

const InitialScreen: React.FC = () => {
    const dispatch = useDispatch()

    const loadQuestions = () => {
        dispatch(fetchQuestions())
    }

    useEffect(() => {
        loadQuestions()
    }, [])

    const { navigate } = useNavigation()

    const {
        loading_fetch_questions,
        error_fetch_questions,
    } = useSelector((state: ApplicationState) => state.quizReducer)

    return (
        <ScreenContainer>
            <View style={styles.container}>
                <Text
                    fontSize={32}
                    color={Colors.FULL_SHADE}
                    textAlign="center"
                >
                    Welcome to the Trivia Challenge!
                </Text>
                <Text
                    fontSize={22}
                    color={Colors.MEDIUM_SHADE}
                    textAlign="center"
                >
                    You will be presented with 10 <Text fontStyle="italic">True or False</Text> questions.
                </Text>
                <Text
                    fontSize={26}
                    color={Colors.FULL_SHADE}
                    textAlign="center"
                >
                    Can you score <Text fontWeight="bold">100%</Text>?
                </Text>
                {
                    !!error_fetch_questions && (
                        <Text color={Colors.NEGATIVE}>
                            {error_fetch_questions}
                            {'\n'}
                            Click on the button to try again
                        </Text>
                    )
                }
                <Button
                    label={!!error_fetch_questions ? "TRY AGAIN" : "BEGIN"}
                    loading={loading_fetch_questions}
                    onPress={() => {
                        if (!!error_fetch_questions) {
                            loadQuestions()
                        } else {
                            console.log("sdsdsdsdsd")
                        }
                    }}
                />
            </View>
        </ScreenContainer>
    )
}

export default InitialScreen
