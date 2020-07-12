import React, { useState, useContext } from 'react';
import {Redirect} from 'react-router-dom'
import Graph from '../components/Graph';
import Header from '../components/Header';
import './main.css'
import Data from '../../../data/context'

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function Main() {
    const Data1 = useContext(Data);
    const [current, setCurrent] = useState('');
    const [exibe,setExibe] = useState([]); 
    const [data, setData] = useState({ root: null });
    const [verify,setVerify] = useState(false)
    const [text,setText] = useState()
    const array = []
    function traverse(obj) {
        if (!obj) return null;

        if (obj.left) {
        traverse(obj.left);
        }

        if (obj.value) {
        let children = [];

        if (obj.left) {
            children = [...children, traverse(obj.left)];
        }

        if (obj.right) {
            children = [...children, traverse(obj.right)];
        }

        return {
            name: String(obj.value),
            children: children.length && [traverse(obj.left)].length ? children : []
        };
        }
        if (obj.right) {
        traverse(obj.right);
        }
    }
    const searchNumber = valor =>{
        var verify = search(valor)
        if(verify){
        setText("Sucess..")
        }else{
        setText("Failed...")
        }
        setVerify(true)
    }

    const search = valor => {
        var found = false 
        var noAtual = data.root

        while(!found && noAtual){
        if(valor < noAtual.value) {
            array.push(noAtual.value)
            noAtual = noAtual.left
        }else if(valor > noAtual.value){
            array.push(noAtual.value)
            noAtual = noAtual.right  
        }else{
            array.push(noAtual.value);
            setExibe(array)
            found = true
        }
        }
        return found
    }
    const deleteNumber = valor =>{
        var verify = deleteEle(valor)
        if(verify){
        setText("Sucess..")
        }else{
        setText("Failed...")
        }
        setVerify(true)
    }
    const deleteEle = (valor) => {
        var found = false 
        var noAtual = data.root;
        var prevNode = noAtual;

        while(!found && noAtual){
        if(valor < noAtual.value) {
            array.push(noAtual.value)
            prevNode = noAtual;
            noAtual = noAtual.left;
        }else if(valor > noAtual.value){
            
            array.push(noAtual.value);
            prevNode = noAtual;
            noAtual = noAtual.right;
        }else{
            if(valor === data.root.value){

                if(noAtual.left)
                {
                    data.root = noAtual.left;
                    var temp = data.root;
                    
                    while(true) {
                        if(!temp.right) {
                            temp.right = noAtual.right;
                            break;
                        }
                        temp = temp.right;
                    }

                    
                } else {
                    data.root = noAtual.right;
                }
            }
            if(prevNode.left === noAtual) {

                if(noAtual.left)
                {
                    prevNode.left = noAtual.left;
                    prevNode = prevNode.left;
                    while(true) {
                        if(!prevNode.right) {
                            prevNode.right=noAtual.right;
                            break;
                        }
                        prevNode = prevNode.right;
                    }
                } else {
                    prevNode.left = noAtual.right;
                }
            }
            if(prevNode.right === noAtual) {
                
                if(noAtual.left){
                    prevNode.right =noAtual.left;
                    while(true) {
                        if(!prevNode.right) {
                            prevNode.right=noAtual.right;
                            break;
                        }
                        prevNode = prevNode.right;
                    }
                } else {
                    prevNode.right = noAtual.right;
                }
            }
            setExibe(array)
            found = true;
        }
        }
        return found
    }
    const em_ordem= (obj) =>{
        if(obj == null){
        setExibe(array)
        return
        }
        em_ordem(obj.left)
        array.push(obj.value)
        em_ordem(obj.right)
        setVerify(false)
    }

    const pos_ordem = obj => { 
        if(obj == null){
        setExibe(array)
        return
        }
        pos_ordem(obj.left)
        pos_ordem(obj.right)
        array.push(obj.value)
        setVerify(false)
    
    }
    const pre_ordem = obj => { 
        if(obj == null){
        setExibe(array)
        return
        }
        array.push(obj.value)
        pre_ordem(obj.left)
        pre_ordem(obj.right)
        setVerify(false)
    }
    
    const formatData = data => {
        const res = Object.keys(data).map(key => {
        return {
            name: data[key] && data[key].value ? String(data[key].value) : key,
            children: traverse(data.root) ? [traverse(data.root)] : null
        };
        });

        if (res[0].children) {
        return res[0].children;
        }

        return res;
    };
    const insert = value => {
        if(value == 0){
            alert(`Can't set value 0 to node`);
            return;
        }
        let node = new Node(value);
        // Set this node to the root value
        if (!data.root) setData({ root: node });
        else {
        let current = data.root;
        while (!!current) {
            if (node.value < current.value) {
            if (!current.left) {
                current.left = node;
                break;
            }
            current = current.left;
            } else if (node.value > current.value) {
            if (!current.right) {
                current.right = node;
                break;
            }
            current = current.right;
            } else {
            break;
            }
        }
        }
        setVerify(false)
        return data;
    };
    
    return (
        (Data1.isLogin) ? 
        <div className="Main">
            <Header
                current={current}
                setCurrent={setCurrent}
                insert={insert}
                data={data}
                em_ordem = {em_ordem}
                pos_ordem = {pos_ordem}
                pre_ordem = {pre_ordem}
                array = {exibe}
                searchNumber = {searchNumber}
                verify = {verify}
                text = {text}
                deleteEle = {deleteNumber}
            />
            <Graph data={formatData(data)} />
        </div>:
        <Redirect to="/login" />
    );
}

export default Main;
