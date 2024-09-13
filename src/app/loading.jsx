import Image from 'next/image'
import loader from '@/assets/loading.svg'
import s from './loading.module.css';

export default function Loading() {
    return (
        <div className={`${s.loadercontainer}`}>
            <Image src={loader} className={`${s.loader}`} alt='loading...' />
        </div>
    )
}