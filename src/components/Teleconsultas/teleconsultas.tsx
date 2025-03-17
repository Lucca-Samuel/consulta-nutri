import React from 'react'
import styles from './teleconsultas.module.css'
import Image from 'next/image'

import cara_sentado from './../../../public/assets/images/cara_sentado.svg'
import computador from './../../../public/assets/images/computador.svg'
import calendario from './../../../public/assets/images/calendario.svg'
import bolha_conversa from './../../../public/assets/images/bolha_conversa.svg'

export default function Teleconsultas() {
  return (
    <div className={styles.teleconsultas_main}>
        <div className={styles.teleconsultas_content}>
            <div className={styles.col_1}>
                <div className={styles.col_1_icone}>
                    <Image src={cara_sentado} height={80} width={80} alt='ícone-sentado'></Image>
                </div>
                <div className={styles.col_1_texto}>
                    <p>Evita filas e salas de espera. <br /> O atendimento ocorre no horário marcado.</p>
                </div>
            </div>
            <div className={styles.col_2}>
                <div className={styles.col_2_header}>
                    <h1>Vantagem das Teleconsultas</h1>
                </div>
                <div className={styles.col_2_boxes}>
                    <div className={styles.col_2_box}>
                        <div className={styles.col_2_box_icone}>
                            <Image src={computador} height={80} width={80} alt='ícone-computador'></Image>
                        </div>
                        <div className={styles.col_2_box_texto}>
                            <p>Consultas de qualquer lugar e em qualquer dispositivo</p>
                        </div>
                    </div>
                    <div className={styles.col_2_box}>
                        <div className={styles.col_2_box_icone}>
                            <Image src={calendario} height={80} width={80} alt='ícone-calendario'></Image></div>
                        <div className={styles.col_2_box_texto}>
                            <p>Flexibilidade de datas e horários para sua consulta.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.col_3}>
                <div className={styles.col_3_icone}>
                    <Image src={bolha_conversa} height={80} width={80} alt='ícone-bolha-conversa'></Image>
                </div>
                <div className={styles.col_3_texto}>
                    <p>Tem mais facilidade e
                    privacidade para se expressar com o  <br />  expressar com o médico.</p>
                </div>
            </div>
        </div>
    </div>
  )
}