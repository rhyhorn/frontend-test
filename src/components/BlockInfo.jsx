import React from 'react';
import { Link } from 'react-router-dom';
import TransactionList from './TransactionList.jsx';

export default function (props) {
    let block = props.block;

    return (
        <div>
            <h1>Блок #{block.block_index}</h1>
            <table class="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th colspan="2">Сводные данные</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Количество транзакций</td>
                        <td>{block.tx.length}</td>
                    </tr>
                    <tr>
                        <td>Высота</td>
                        <td>
                            {block.height}&nbsp;
                            {block.main_chain === true
                                ? <font color="green">(Главная цепочка)</font>
                                : ''
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Биты</td>
                        <td>{block.bits}</td>
                    </tr>
                    <tr>
                        <td>Размер</td>
                        <td>{block.size}</td>
                    </tr>
                    <tr>
                        <td>Версия</td>
                        <td>{block.ver}</td>
                    </tr>
                    <tr>
                        <td>Nonce (случайно перебираемое число)</td>
                        <td>{block.nonce}</td>
                    </tr>
                </tbody>
            </table>

            <table class="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th colspan="2">Хэши</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Хэш</td>
                        <td>
                            {block.hash}
                        </td>
                    </tr>
                    <tr>
                        <td>Предыдущий блок</td>
                        <td>
                            {block.prev_block}
                        </td>
                    </tr>
                    <tr>
                        <td>Корень Меркле</td>
                        <td class="hash-link">
                            {block.mrkl_root}
                        </td>
                    </tr>
                </tbody>
            </table>

            <TransactionList transactions={block.tx} />
        </div>
    );
}