import { Text } from 'react-native'
import NewButtonAlert from '@/components/NewButtonAlert';


const BaiTap2 = () => {
    return (
        <>
        <NewButtonAlert 
            btnTitle="Click me"
            alertTitle="Hello"
            alertMessage="Hello World"
        />
        <NewButtonAlert 
            btnTitle="Click me again"
            alertMessage="Hi there"
            alertTitle='Hi'
        />

        
        </>
    )
}


export default BaiTap2;