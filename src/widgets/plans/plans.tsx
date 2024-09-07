import React, {forwardRef, useCallback, useEffect, useState} from 'react';
import styles from './plans.module.scss'
import {Button, Plan} from "@/components";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {updateChecked, updateIsModal} from "@/lib/features/nameSlice";

const Plans = forwardRef<HTMLElement, EmptyProps>((_, ref):JSX.Element => {
    const [error, setError] = useState<boolean>(false)
    const user = useAppSelector((state) => state.users.names);
    const activeUser = user.find(user => user.isChecked)
    const loading = useAppSelector((state) => state.users.loading);
    const dispatch = useAppDispatch();

    const onChangeHandler = useCallback((id:string) => {
        dispatch(updateChecked(id))
    },[])

    const onGetClickHandler = useCallback(() => {
        if(activeUser){
            dispatch(updateIsModal(true))
        }else{
            setError(true)
        }
    },[activeUser,error])

    useEffect(() => {
        if(error && activeUser){
            setError(false)
        }
    }, [activeUser]);

    const planList = user.map((p) =>
        <Plan value={p.name} key={p.id} checked={p.isChecked} onChange={() => onChangeHandler(p.id)}/>)

    return (
        <section className={styles.plans} ref={ref}>
            {
                loading ? <span>Loading...</span> :
                    <>
                        <p className={styles.text}>Choose your <span className={styles.text_highlighted}>NAme</span></p>
                        {
                            error && <span className={styles.error}>Make a selection</span>
                        }
                        {planList}
                        <Button variant="primary" width="full" onClick={onGetClickHandler}>Get VPN</Button>
                    </>
            }
        </section>
    );
});
Plans.displayName = 'Plans';
type EmptyProps = unknown;
export default React.memo(Plans);
