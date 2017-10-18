using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using System.Linq;

public class viewImage : MonoBehaviour {

    SpriteRenderer spriteRenderer;
    public Sprite img;

	// Use this for initialization
	void Start () {
        
        spriteRenderer = GetComponent<SpriteRenderer>();
        spriteRenderer.sprite = img;
            
        //Sprite spriteImage = Resources.Load("poop.png", typeof(Sprite)) as Sprite;
        //new GameObject("Sprite").AddComponent<SpriteRenderer>().sprite = spriteImage;

    }

    // Update is called once per frame
    void Update () {

        

    }
}